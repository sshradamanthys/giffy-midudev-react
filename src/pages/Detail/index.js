import { Redirect } from "wouter";
import Loader from "components/Loader";
import Gif from "components/Gif";
import { useSingleGif } from "hooks/useSingleGif";
import { Helmet } from "react-helmet";

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Loader />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  const title = gif ? gif.title : "";

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
        <meta name="description" content={title} />
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
};

export default Detail;
