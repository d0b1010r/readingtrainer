import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./SuccessThing.css";

export function SuccessThing({
  done,
  show,
}: {
  show: boolean;
  done: () => void;
}) {
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        appear={true}
        in={show}
        timeout={1000}
        classNames="my-node"
        onEntered={() => done()}
        onAppeared={() => done()}
      >
        <div className="my-node" ref={nodeRef}>
          😜
        </div>
      </CSSTransition>
    </div>
  );
}
