import React from 'react';
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from 'react-awesome-reveal';

interface Props extends React.PropsWithChildren<{ type: string }> {
  [key: string]: any;
}

interface ComponentMap {
  [key: string]: React.ComponentType<any>;
}

const Div = ({ children, ...props }: Props) => <div {...props}>{children}</div>;

const componentMap: ComponentMap = {
  Bounce: Bounce,
  Div: Div,
  Fade: Fade,
  Flip: Flip,
  Hinge: Hinge,
  JackInTheBox: JackInTheBox,
  Roll: Roll,
  Rotate: Rotate,
  Slide: Slide,
  Zoom: Zoom,
};

const Section: React.FC<Props> = ({ type = "Div", ...props }) => {
  const Component = componentMap[type];

  return <Component triggerOnce {...props}>{props.children}</Component>;
};

export default Section;
