import styled from "styled-components";

const Item = styled.div`
  float: left;
  width: calc(25% - 15px);
  margin-right: 20px;
  margin-bottom: 40px;
  text-align: center;
  &:nth-child(4n) {
    margin-right: 0;
  }
  .imgWrap {
    width: 110px;
    height: 150px;
    margin: 0 auto;
    img {
      max-height: 100%;
    }
  }
  strong {
    display: block;
    margin-top: 7px;
    font-size: 17px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ListItem = ({ link, title, image, pubDate }) => {
  return (
    <Item>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="imgWrap">
          <img src={image} alt={`${title} 포스터`} />
        </div>
        <strong>{title}</strong>
        <div>{pubDate}</div>
      </a>
    </Item>
  );
};

export default ListItem;
