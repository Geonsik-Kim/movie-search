import styled from "styled-components";
import { useRef, useEffect } from "react";
import ListItem from "./ListItem";

const ListWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
`;

const List = ({ movieItem }) => {
  // 렌더링이 되어도 값을 보존하기 위해 useRef를 사용
  const mounted = useRef(false);

  // setMovieItemm 즉 useState는 비동기 방식으로 작동하기에 useEffect를 사용하여 바로 적용하여 확인 할 수있도록 함
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log(movieItem);
    }
  }, [movieItem]);

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
