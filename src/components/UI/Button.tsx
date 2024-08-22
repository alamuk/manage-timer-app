import { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string };
type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}
export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProp(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
