export const parseJSONSafe = async (response) => {
	try {
		return await response.clone().json();
	} catch (error) {
		const text = await response.text().catch(() => "");
		if (!text) return {};

		try {
			return JSON.parse(text);
		} catch (innerError) {
			return { error: text };
		}
	}
};

export const handleJSONResponse = async (response, defaultErrorMessage) => {
	const data = await parseJSONSafe(response);

	if (!response.ok) {
		const errorMessage = data?.error || defaultErrorMessage || "Request failed";
		throw new Error(errorMessage);
	}

	return data;
};

