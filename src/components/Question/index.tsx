import { ReactNode } from 'react';
import classnames from 'classnames';
 
import './style.scss';

type QuestionProps = {
  content: string,
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content, 
  author, 
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    // forma nativa para declarar as classes em ReactJS
    // <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}> 

    // div utilizando um componente para declaração das classes de forma mais dinamica 
    <div className={classnames(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted },
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}