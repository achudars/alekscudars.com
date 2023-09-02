import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();
  return (
    <a className="demo-back-link" onClick={() => router.back()} href="#">
      <i className="fas fa-arrow-left" />
    </a>
  );
};
export default BackBtn;
