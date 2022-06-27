import { Avatar } from "./Avatar";

export const Header = (props) => {
  return (
    <>
      <div>Header {props.title}</div>
      <Avatar user={props.user} />
    </>
  );
};
