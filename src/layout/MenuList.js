import { FixedSizeList as List } from 'react-window';

const MenuList = (props) => {
    const { children, getValue, ...rest } = props;

    // We need to pass rest props to the List component
    return (
        <List
            height={200} // Height of the dropdown
            itemCount={children.length} // Number of items
            itemSize={40} // Height of each item
            width="100%" // Full width of the dropdown
            useIsScrolling={true}
            {...rest} 
        >
            {({ index, style }) => (
                <div style={style}>
                    {children[index]}
                </div>
            )}
        </List>
    );
};

export default MenuList;