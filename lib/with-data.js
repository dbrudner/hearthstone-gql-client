import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient({ headers }) {
	return new ApolloClient({
		uri: "https://hearthstone-graphql.herokuapp.com/graphql",
		request: operation => {
			operation.setContext({
				headers,
			});
		},
	});
}

export default withApollo(createClient);
