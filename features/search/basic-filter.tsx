import { Select } from "antd";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
	query {
		meta {
			cardClasses
			types
		}
	}
`;

export const BasicFilter = () => (
	<Query query={query}>
		{({ data }) => {
			return (
				<Select style={{ width: 130 }} defaultValue="Options...">
					<Select.Option value="Options...">Options...</Select.Option>
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
