import { Select } from "antd";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import capitalize from "lodash/capitalize";
import { BasicOptionType } from ".";

type SetBasicOptionPayload = {
	basicOption: string;
	basicOptionType: BasicOptionType;
};

type BasicFilterProps = {
	setBasicOption: (payload: SetBasicOptionPayload) => void;
};

const query = gql`
	query {
		meta {
			cardClasses
			types
		}
	}
`;

export const BasicFilter: React.SFC<BasicFilterProps> = ({
	setBasicOption,
}) => {
	return (
		<Query query={query}>
			{({ data }) => {
				const handleChange = value => {
					const basicOptionType = data.meta.cardClasses.includes(
						value,
					)
						? BasicOptionType.CARD_CLASS
						: BasicOptionType.TYPE;

					setBasicOption({ basicOption: value, basicOptionType });
				};

				return (
					<Select
						onChange={handleChange}
						style={{ width: 130 }}
						defaultValue="Options..."
					>
						<Select.Option value="">Options...</Select.Option>
						<Select.OptGroup label="Class">
							{data.meta.cardClasses.map(cardClass => (
								<Select.Option
									key={cardClass}
									value={cardClass}
								>
									{capitalize(cardClass)}
								</Select.Option>
							))}
						</Select.OptGroup>
						<Select.OptGroup label="Type">
							{data.meta.types.map(type => (
								<Select.Option key={type} value={type}>
									{capitalize(type)}
								</Select.Option>
							))}
						</Select.OptGroup>
					</Select>
				);
			}}
		</Query>
	);
};
