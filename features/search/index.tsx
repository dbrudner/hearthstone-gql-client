import { Form, Input, Button } from "antd";
import { BasicFilter } from "./basic-filter";

type SearchProps = {};

const Search: React.SFC<SearchProps> = () => {
	return (
		<div>
			<Form layout="inline">
				<Form.Item>
					<Input.Search
						style={{ width: 400 }}
						addonBefore={<BasicFilter />}
						enterButton
					/>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Search;
