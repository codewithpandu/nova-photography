import { IoFlash } from "react-icons/io5";

type ContactCardProps = {
  icon: typeof IoFlash;
  title: string;
  content: string;
};

export default function ContactCard({
  icon: Icon,
  title,
  content,
}: ContactCardProps) {
  return (
    <div className="w-full h-fit flex flex-col p-7 gap-7 rounded-4xl bg-background border shadow-md">
      <div className="w-18 aspect-square rounded-xl flex bg-foreground/50 items-center justify-center ">
        <Icon className="text-3xl text-background" />
      </div>
      <div className="w-full h-fit flex flex-col gap-2 px-1.5">
        <h4 className="text-xl font-semibold text-foreground w-fit">{title}</h4>
        <p className="text-ellipsis line-clamp-2 text-foreground">{content}</p>
      </div>
    </div>
  );
}
