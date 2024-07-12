import Loading from "../components/Loading";
import useSocket from "../hooks/useSocket";
import EditorPage from "../pages/EditorPage";

const EditorLayout = () => {
  const { isLoading, isError } = useSocket();
  return isLoading ? <Loading isError={isError} /> : <EditorPage />;
};

export default EditorLayout;
