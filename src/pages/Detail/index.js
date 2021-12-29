import { Redirect } from "wouter";
import Loader from "components/Loader";
import { useSingleGif } from "hooks/useSingleGif";
import Gif from "components/Gif";

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Loader />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
};

export default Detail;
