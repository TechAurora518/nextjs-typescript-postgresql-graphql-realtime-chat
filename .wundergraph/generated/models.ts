export interface AddMessageInput {
	message: string;
}

export interface AllUsersInput {
	email: string;
}

export interface ChangeUserNameInput {
	newName: string;
}

export interface DeleteAllMessagesByUserEmailInput {
	email: string;
}

export interface SetLastLoginInput {
	email: string;
}

export interface InternalAddMessageInput {
	email: string;
	name: string;
	message: string;
}

export interface InternalAllUsersInput {
	email: string;
}

export interface InternalChangeUserNameInput {
	newName: string;
	email: string;
}

export interface InternalDeleteAllMessagesByUserEmailInput {
	email: string;
}

export interface InternalSetLastLoginInput {
	email: string;
}

export interface InternalUserInfoInput {
	email: string;
}

export interface InjectedAddMessageInput {
	email: string;
	name: string;
	message: string;
}

export interface InjectedAllUsersInput {
	email: string;
}

export interface InjectedChangeUserNameInput {
	newName: string;
	email: string;
	updatedAt: string;
}

export interface InjectedDeleteAllMessagesByUserEmailInput {
	email: string;
}

export interface InjectedSetLastLoginInput {
	email: string;
	now: string;
}

export interface InjectedUserInfoInput {
	email: string;
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface AddMessageResponse {
	data?: {
		createOnemessages?: {
			id: number;
			message: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface AllUsersResponse {
	data?: {
		findManyusers: {
			id: number;
			email: string;
			name: string;
			messages?: {
				id: number;
				message: string;
			}[];
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ChangeUserNameResponse {
	data?: {
		updateOneusers?: {
			id: number;
			email: string;
			name: string;
			updatedat: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DeleteAllMessagesByUserEmailResponse {
	data?: {
		deleteManymessages?: {
			count: number;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface MessagesResponse {
	data?: {
		findManymessages: {
			id: number;
			message: string;
			users: {
				id: number;
				name: string;
			};
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface MockQueryResponse {
	data?: {
		findFirstusers?: {
			id: number;
			email: string;
			name: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface SetLastLoginResponse {
	data?: {
		updateOneusers?: {
			id: number;
			lastlogin: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UserInfoResponse {
	data?: {
		findFirstusers?: {
			id: number;
			email: string;
			name: string;
			lastlogin: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface AddMessageResponseData {
	createOnemessages?: {
		id: number;
		message: string;
	};
}

export interface AllUsersResponseData {
	findManyusers: {
		id: number;
		email: string;
		name: string;
		messages?: {
			id: number;
			message: string;
		}[];
	}[];
}

export interface ChangeUserNameResponseData {
	updateOneusers?: {
		id: number;
		email: string;
		name: string;
		updatedat: string;
	};
}

export interface DeleteAllMessagesByUserEmailResponseData {
	deleteManymessages?: {
		count: number;
	};
}

export interface MessagesResponseData {
	findManymessages: {
		id: number;
		message: string;
		users: {
			id: number;
			name: string;
		};
	}[];
}

export interface MockQueryResponseData {
	findFirstusers?: {
		id: number;
		email: string;
		name: string;
	};
}

export interface SetLastLoginResponseData {
	updateOneusers?: {
		id: number;
		lastlogin: string;
	};
}

export interface UserInfoResponseData {
	findFirstusers?: {
		id: number;
		email: string;
		name: string;
		lastlogin: string;
	};
}
