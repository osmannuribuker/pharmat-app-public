import React, { Component } from "react";
import { connect } from "react-redux";
import { getGroupsAction, createGroupAction } from "../actions/groupAction";
import { Table, Drawer } from "antd";
import SearchInput from "../components/table/SearchInput";
import { currentUserAction } from "../actions/authenticationActions";

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filteredData: null,
      searchText: null,
      visible: false,
      groupName: "",
      origData: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        getGroupsAction((response) => {
          this.setState({
            origData: response,
          });
        })
      );
    }
  }

  createGroupClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  createGroupOpen = () => {
    this.setState({
      visible: true,
    });
  };

  renewData = (data) => {
    this.setState({
      filteredData: data,
    });
  };

  onCreateGroup = () => {
    const data = {
      name: this.state.groupName,
    };
    const { dispatch } = this.props;
    dispatch(
      createGroupAction(
        data,
        () => {
          dispatch(
            getGroupsAction((response) => {
              this.setState({
                origData: response,
                visible: false,
              });
              dispatch(currentUserAction());
            })
          );
        },
        () => {
          console.log("Grup oluşturulurken bir sorun ile karşılaşıldı");
        }
      )
    );
  };

  onSendJoinRequest = (id) => {
    console.log(`sended request for ${id}`);
  };

  isMember(id) {
    const mm = this.props.myGroups.filter((myGroup) => myGroup.id === id);
    if (mm.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const columns = [
      {
        title: "Adı",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Yöneticiler",
        dataIndex: "administrators",
        key: "administrators",
      },
      {
        title: "İşlem",
        dataIndex: "key",
        key: "key",
        render: (key) => (
          <>
            {this.isMember(key) ? (
              <button
                className="btn btn-outline-primary"
                onClick={() => this.onSendJoinRequest(key)}
              >
                Üyesiniz
              </button>
            ) : (
              <button
                className="btn btn-outline-info"
                onClick={() => this.onSendJoinRequest(key)}
              >
                Başvuru yap
              </button>
            )}
          </>
        ),
      },
    ];

    return (
      <div className="row">
        <div className="col-12">
          <div className="card m-b-20">
            <div className="card-body">
              <h4 className="mt-0 header-title">Tüm Gruplar</h4>
              <p className="text-muted m-b-30">
                Bir gruba katılma isteği gönderdiğinizde ilgili grubun{" "}
                <code>yöneticisinin</code> sizin başvurusunu onaylaması gerekir.
                Yeni bir grup oluşturduğunuz zaman otomatik olarak o grubun{" "}
                <code>yöneticisi</code> olursunuz.
              </p>
              <div className="form-group row">
                <div className="col-sm-2">
                  {this.props.groups ? (
                    <SearchInput
                      origData={this.props.groups}
                      renewData={this.renewData}
                    />
                  ) : null}
                </div>
              </div>
              <Table
                dataSource={this.state.filteredData}
                columns={columns}
                loading={false}
              />
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-info btn-lg btn-block waves-effect waves-light"
                  onClick={this.createGroupOpen}
                >
                  Yeni bir grup oluştur
                </button>
              </div>
              <Drawer
                title="Yeni bir grup oluştur"
                width="50%"
                onClose={this.createGroupClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <button
                      onClick={this.createGroupClose}
                      style={{ marginRight: 8 }}
                      className="btn btn-danger"
                    >
                      İptal
                    </button>
                    <button
                      onClick={this.onCreateGroup}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Oluştur
                    </button>
                  </div>
                }
              >
                <div className="card-body">
                  <h4 className="mt-0 header-title text-center">
                    Grup bilgisi
                  </h4>
                  <p className="text-muted m-b-30 text-center">
                    Lütfen oluşturmak istediğiniz grup bilgilerini giriniz.
                  </p>
                  <form className="form-horizontal m-t-30">
                    <div className="form-group row">
                      <label
                        htmlFor="groupName"
                        className="col-sm-2 col-form-label"
                      >
                        Grup Adı
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          id="groupName"
                          required
                          onChange={this.onChange}
                          placeholder="Grup Adı"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  myGroups: response.currentUser.response.pharmacy.groups,
  groups: response.groups.response,
});

export default connect(mapStateToProps)(GroupPage);
