import React from 'react';
import {ListIconsButtons, ItemIcon, ItemImage, ItemText, ItemLink} from "./styles";

const ListIcons = ({listIcons}) => (
    <ListIconsButtons>
        {listIcons.map((itemIcon, index, list) => {
            return (<ItemIcon key={index}>
                <ItemLink to={itemIcon.url}>
                    <ItemImage src={'/images/' + itemIcon.imgSrc} alt={itemIcon.text}></ItemImage>
                    <ItemText>
                        {itemIcon.text}
                    </ItemText>
                </ItemLink>
                {index !== list.length - 1 ? '|' : ''}
            </ItemIcon>);
        })}
    </ListIconsButtons>
);

export default ListIcons;