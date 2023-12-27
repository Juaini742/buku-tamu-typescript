import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getDetailsNews} from "../../../../store/actions/get.detail.news.action";

function NewsDetails() {
  const domainId = useParams();
  const dispacth = useDispatch();
  const details = useSelector((state) => state.newDetails);
  const newId = domainId.id;
  const newData = details.data;

  useEffect(() => {
    dispacth(getDetailsNews(newId));
  }, [dispacth]);

  return (
    <>
      <span>{newData.title}</span>
      <a href={newData.excel}>download</a>
      <table>{newData.table}</table>
    </>
  );
}

export default NewsDetails;
