import Search from "../features/basic-search";
import Link from "next/link";
import { Icon } from "antd";

const Index = () => (
	<div>
		<h1>Hearthstone</h1>
		<Search />
		<div style={{ marginTop: "10px" }}>
			<Link href="/advanced">
				<a>
					Advanced search <Icon type="caret-right" />
				</a>
			</Link>
		</div>
	</div>
);

export default Index;
