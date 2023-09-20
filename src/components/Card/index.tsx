import styles from './styles.module.scss';

interface Props {
  thumbnail?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const Card: React.FC<Props> = ({
  className = '',
  thumbnail,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={`${className}`}>
      <div className="pb-3 rounded-2xl bg-blue-500 shadow-2xl">
        <div className="w-full h-auto">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
        <div className="p-5">
          <h2 className="text-white text-2xl font-normal text-center">
            {title}
          </h2>
          <h3 className="text-white text-xl font-normal text-center mt-1">
            {subtitle}
          </h3>
          <p className="text-white text-lg font-light text-left mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
