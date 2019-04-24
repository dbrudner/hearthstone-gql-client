import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
	BasicOptionType,
	SearchValues as SearchResultsProps,
} from "../basic-search";
import { Card } from "./card";

const query = gql`
	query Card($search: String, $cardClass: cardClass, $type: type) {
		cards(search: $search, filter: { cardClass: $cardClass, type: $type }) {
			name
			images {
				small
			}
		}
	}
`;

const SearchResults: React.SFC<SearchResultsProps> = ({
	search,
	basicOption,
	basicOptionType,
}) => {
	if (!search) return null;

	const variables = {
		search,
		cardClass:
			basicOptionType === BasicOptionType.CARD_CLASS ? basicOption : null,
		type: basicOptionType === BasicOptionType.TYPE ? basicOption : null,
	};

	return (
		<div>
			<Query query={query} variables={variables}>
				{({ data }) => {
					return (
						<div
							style={{
								display: "grid",
								gridTemplateColumns:
									"repeat(auto-fill, minmax(250px, 1fr))",
							}}
						>
							{data.cards &&
								data.cards.map(card => <Card {...card} />)}
						</div>
					);
				}}
			</Query>
		</div>
	);
};

export default SearchResults;
