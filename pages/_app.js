import App, { Container } from "next/app";
import Layout from "../features/common/layout";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/with-data";
import stylesheet from "antd/dist/antd.min.css";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withData(MyApp);
