/*     
 Copyright (C) 2016 Ulbora Labs Inc. (www.ulboralabs.com)
 All rights reserved.
 
 Copyright (C) 2016 Ken Williamson
 All rights reserved.
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published
 by the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

exports.IMPLICIT_GRANT_INSERT_QUERY = "INSERT INTO implicit_grant Set ?";
exports.IMPLICIT_GRANT_GET_BY_ID_QUERY = "SELECT id, client_id, user_id, access_token_id "+
                                         "FROM implicit_grant WHERE client_id = ? and user_id = ? ";

exports.IMPLICIT_GRANT_GET_BY_SCOPE_QUERY = "SELECT i.id, i.client_id, s.scope, i.access_token_id " +
                                            "FROM implicit_grant i inner join implicit_scope s " +
                                            "on i.id = s.implicit_grant_id " +
                                            "WHERE i.client_id = ? and i.user_id = ? and s.scope = ?";        
                                 
exports.IMPLICIT_GRANT_DELETE_QUERY = "DELETE FROM implicit_grant WHERE client_id = ? and user_id = ? ";



exports.IMPLICIT_GRANT_SCOPE_INSERT_QUERY = "INSERT INTO implicit_scope Set ?";
exports.IMPLICIT_GRANT_SCOPE_GET_BY_CODE_QUERY = "SELECT id, scope, implicit_grant_id "+
                                             "FROM implicit_scope WHERE implicit_grant_id = ?";
exports.IMPLICIT_GRANT_SCOPE_DELETE_QUERY = "DELETE FROM implicit_scope WHERE id = ?";

exports.IMPLICIT_GRANT_SCOPE_DELETE_ALL_QUERY = "DELETE FROM implicit_scope WHERE implicit_grant_id = ?";
