interface LinkProps {
    display_text: string;
    link: string;
}

const Link = ({ display_text, link }: LinkProps) => {
    return (
      <span>
        <a
          href={link}
          target="_blank"  // Open the link in a new tab
          rel="noopener noreferrer"
        >
          {display_text}
        </a>
      </span>
    )
}

export default Link;
