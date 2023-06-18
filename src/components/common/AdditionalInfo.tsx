import Link from 'next/link';

type Props = {
  text: string;
  href: string;
  hrefText: string;
};

export const AdditionalInfo: React.FC<Props> = ({ text, href, hrefText }) => {
  return (
    <p className="text-zinc-400 text-sm">
      {text}{' '}
      <Link
        className="underline text-zinc-400 hover:text-zinc-500"
        target="__blank"
        href={new URL(href)}
      >
        {hrefText}
      </Link>
    </p>
  );
};
