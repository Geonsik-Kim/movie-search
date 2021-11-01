import { useState, useCallback } from "react";
import styled from "styled-components";
import { Blind } from "../styles/CommonStyles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchWrap = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const InputArea = styled.input.attrs({
  type: "text",
})`
  width: 700px;
  height: 70px;
  padding: 0 20px;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #333;
  background: none;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
`;

const BtnSearch = styled.button.attrs({
  type: "submit",
})`
  width: 70px;
  height: 70px;
`;

const IconSearch = styled(AiOutlineSearch)`
  font-size: 26px;
  color: #333;
  vertical-align: middle;
`;

const Search = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // value 값 초기화
      e.preventDefault(); // 브라우저 새로고침 방지
    },
    [onInsert, value]
  );

  return (
    <SearchWrap>
      <form onSubmit={onSubmit}>
        <InputArea
          value={value}
          onChange={onChange}
          placeholder="영화명을 입력해주세요!"
        />
        <BtnSearch>
          <Blind>검색</Blind>
          <IconSearch />
        </BtnSearch>
      </form>
    </SearchWrap>
  );
};

export default Search;
