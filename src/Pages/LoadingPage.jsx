import BeatLoader from "react-spinners/BeatLoader";

export default function LoadingPage() {
  return (
    <div className=" flex h-screen items-center justify-center bg-gray-800">
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
