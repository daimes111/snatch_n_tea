import sendRequest from './send-request';

const BASE_URL = '/api/comments';

export function getAll() {
  return sendRequest(BASE_URL);
}
export function create(postId, payload) {
  return sendRequest(`${BASE_URL}/${postId}`, "POST", payload);
}

export function updateById(postId, id, payload) {
  return sendRequest(`${BASE_URL}/${postId}/${id}`, "PUT", payload);
}
export function deleteById(postId, id) {
  return sendRequest(`${BASE_URL}/${postId}/${id}`, "DELETE");
}
