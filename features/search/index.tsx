import { Form, Input, Button } from "antd";
import { BasicFilter } from "./basic-filter";
import { Formik } from "formik";
import Results from "./results";
import { useState } from "react";

export type SearchOptions = {
	search: string;
	basicOption: string;
};

type SearchProps = {};

const initialValues = {
	search: "",
	basicOption: "",
};

const Search: React.SFC<SearchProps> = () => {
	const [searchOptions, setSearchOptions] = useState({ ...initialValues });

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={values => console.log(values)}
			>
				{({ handleSubmit, setFieldValue }) => (
					<Form layout="inline" onSubmit={handleSubmit}>
						<Form.Item>
							<Input.Search
								style={{ width: 400 }}
								addonBefore={
									<BasicFilter
										setBasicOptionValue={value =>
											setFieldValue("basicOption", value)
										}
									/>
								}
								enterButton
								onSearch={() => handleSubmit()}
								onChange={e =>
									setFieldValue("search", e.target.value)
								}
							/>
						</Form.Item>
					</Form>
				)}
			</Formik>
			<Results {...searchOptions} />
		</div>
	);
};

export default Search;
