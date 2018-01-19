import axios from '../../../helper/axios';

const base = '/dreamersky/blog';

const insert = params => axios.post(`${base}`, params).then(res => res.data);
const update = (id, params) => axios.put(`${base}/${id}`, params).then(res => res.data);
const changeRelease = id => axios.put(`${base}/${id}/changeRelease`).then(res => res.data);
const changePrivate = id => axios.put(`${base}/${id}/changePrivate`).then(res => res.data);
const list = params => axios.get(`${base}`, { params }).then(res => res.data);
const del = id => axios.delete(`${base}/${id}`).then(res => res.data);

export default {
    list,
    insert,
    update,
    del,
    changeRelease,
    changePrivate
};
