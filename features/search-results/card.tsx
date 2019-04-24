type CardProps = {
	images: {
		small: string;
	};
	name: string;
};

export const Card: React.SFC<CardProps> = ({ images, name }) => (
	<div>
		<h2>{name}</h2>
		<img src={images.small} />
	</div>
);
