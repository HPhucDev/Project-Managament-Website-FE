import React, { useState, useEffect, lazy, Suspense } from "react";
import { Row, Col, Pagination, Skeleton } from "antd";
import { useSelector } from "react-redux";
import Heading from "../../../../components/heading/heading";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { ProjectPagination } from "../style";

const GridCard = lazy(() => import("./GridCard"));

const Grid = () => {
  const project = [
    {
      id: 1,
      title: "Dashboard UI Project",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Design",
      rate: 5,
      popular: 1,
      percentage: 85,
    },
    {
      id: 2,
      title: "Custom Software",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 3,
      popular: 2,
      percentage: 38,
    },
    {
      id: 3,
      title: "Application UI Design",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 4,
      popular: 3,
      percentage: 46,
    },
    {
      id: 4,
      title: "Website Builder",
      status: "late",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 5,
      popular: 4,
      percentage: 29,
    },
    {
      id: 5,
      title: "Component Library",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 4,
      popular: 5,
      percentage: 96,
    },
    {
      id: 6,
      title: "Dashboard UI Project",
      status: "complete",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 3,
      popular: 6,
      percentage: 73,
    },
    {
      id: 7,
      title: "Custom Software",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 2,
      popular: 7,
      percentage: 42,
    },
    {
      id: 8,
      title: "Application UI Design",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 4,
      popular: 8,
      percentage: 36,
    },
    {
      id: 9,
      title: "Website Builder",
      status: "late",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 3,
      popular: 9,
      percentage: 82,
    },
    {
      id: 10,
      title: "Component Library",
      status: "progress",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Development",
      rate: 2,
      popular: 10,
      percentage: 63,
    },
    {
      id: 11,
      title: "Dashboard UI Project",
      status: "complete",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Graphic Design",
      rate: 1,
      popular: 11,
      percentage: 53,
    },
    {
      id: 12,
      title: "Dashboard UI Project",
      status: "early",
      content:
        "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      category: "Web Design",
      rate: 5,
      popular: 12,
      percentage: 33,
    },
  ];

  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  // useEffect(() => {
  //   if (project) {
  //     setState({
  //       projects: project,
  //     });
  //   }
  // }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={25}>
      {projects.length ? (
        projects.map((value) => {
          return (
            <Col key={value.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <GridCard value={value} />
              </Suspense>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Không có dữ liệu!</Heading>
          </Cards>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <ProjectPagination>
          {projects.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default Grid;
