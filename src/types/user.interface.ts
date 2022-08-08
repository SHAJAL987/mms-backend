/*Entity: MMS_USER_ROLE_SCOPE */
export interface ICreateRoleScope {
  role_scope_code: string;
  scope_name: string;
  is_visible: string;
  status: string;
  create_by: string;
}

export interface IUpdateRoleScope {
  role_scope_code: string;
  scope_name: string;
  is_visible: string;
  status: string;
}
