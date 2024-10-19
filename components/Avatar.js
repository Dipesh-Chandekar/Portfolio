import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none hide-on-small">
      <Image
        src={"/avatar.png"}
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
        style={{position: 'absolute', bottom:'-70px'}}
      />
    </div>
  );
};

export default Avatar;
