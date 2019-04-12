import { Select } from "antd";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { any } from "prop-types";

type BasicFilterProps = {
	setBasicOptionValue: (value: string) => void;
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
	setBasicOptionValue,
}) => (
	<Query query={query}>
		{({ data }) => {
			return (
				<Select
					onChange={value => setBasicOptionValue(value)}
					style={{ width: 130 }}
					defaultValue=""
				>
					<Select.Option value="">Options...</Select.Option>
					<Select.OptGroup label="Class">
						{data.meta.cardClasses.map(cardClass => (
							<Select.Option key={cardClass} value={cardClass}>
								{cardClass}
							</Select.Option>
						))}
					</Select.OptGroup>
					<Select.OptGroup label="Type">
						{data.meta.types.map(type => (
							<Select.Option key={type} value={type}>
								{type}
							</Select.Option>
						))}
					</Select.OptGroup>
				</Select>
			);
		}}
	</Query>
);
