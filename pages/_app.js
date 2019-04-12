import stylesheet from "antd/dist/antd.min.css";
import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import Layout from "../features/common/layout";

class MyApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;
		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApolloClient(MyApp);
