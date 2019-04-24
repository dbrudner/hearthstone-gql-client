import { Form, Input } from "antd";
import { Formik } from "formik";
import { useState } from "react";
import SearchResults from "../search-results";
import { BasicFilter } from "./basic-filter";

type SearchProps = {};

export enum BasicOptionType {
	CARD_CLASS = "cardClass",
	TYPE = "type",
}

export type SearchValues = {
	search: string;
	basicOption: string;
	basicOptionType: BasicOptionType;
};

const initialValues: SearchValues = {
	search: "",
	basicOption: "",
	basicOptionType: null,
};

const Search: React.SFC<SearchProps> = () => {
	const [searchOptions, setSearchOptions] = useState({ ...initialValues });

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={values => setSearchOptions(values)}
			>
				{({ handleSubmit, setValues, values, setFieldValue }) => (
					<Form layout="inline">
						<Form.Item>
							<Input.Search
								style={{ width: 400 }}
								addonBefore={
									<BasicFilter
										setBasicOption={({
											basicOption,
											basicOptionType,
										}) =>
											setValues({
												...values,
												basicOption,
												basicOptionType,
											})
										}
									/>
								}
								enterButton
								onSearch={handleSubmit as () => void}
								onChange={e =>
									setFieldValue("search", e.target.value)
								}
							/>
						</Form.Item>
					</Form>
				)}
			</Formik>
			<SearchResults {...searchOptions} />
		</>
	);
};

export default Search;
