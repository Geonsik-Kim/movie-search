import styled from "styled-components";
import ListItem from "./ListItem";

const ListWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
`;

const List = ({ movieItem }) => {
  return (
    <ListWrap>
      {movieItem.map((item, index) => (
        <ListItem
          key={index}
          link={item.link}
          title={item.title.replace(/<(\/b|b)([^>]*)>/gi, "")}
          image={item.image}
          pubDate={item.pubDate}
        />
      ))}
    </ListWrap>
  );
};

export default List;
