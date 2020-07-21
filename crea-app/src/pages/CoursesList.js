import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import CourseContainer from '../pages/CourseContainer';

const courses = [
  {
    index: 1,
    genre: 'arte',
    name: 'courso 1',
    category: 'Busqueda de empleo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    instructor: 'Marie Garcia',
    duration: 2,
    price: 0,
    modules: [
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      }
    ]
  },
  {
    index: 2,
    genre: 'yoga',
    name: 'Cocinando',
    category: 'Busqueda de empleo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    instructor: 'Marie Garcia',
    duration: 2,
    price: 0,
    modules: [
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      }
    ]
  },
  {
    index: 3,
    genre: 'drama',
    name: 'Encuentra un empleo',
    category: 'Busqueda de empleo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    instructor: 'Marie Garcia',
    duration: 2,
    price: 0,
    modules: [
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      },
      {
        title: '',
        description: '',
        steps: ' ',
        url: ' '
      }
    ]
  }
];

const CoursesList = () => {
  const [movido, setMovido] = useState(false);
  const [filter, setFilter] = useState({
    arte: false,
    drama: false,
    yoga: false
  });

  const onSelectFilter = (item) => {
    if (!movido) {
      setMovido(true);
    }

    if (item === 'all') {
      setFilter({
        arte: true,
        drama: true,
        yoga: true
      });
    } else {
      setFilter({ ...filter, [item]: !filter[item] });
    }
  };
  return (
    <>
      <h1>This is courses list</h1>
      <ul style={{ listStyle: 'none' }}>
        {/* {courses.map((item) => (
          <li style={{ display: 'inline', borderRadius: 10, padding: 3, marginRight: 10, backgroundColor: '#DDD' }}>
            <Link to={`/courses/${item.index}`}> {item.name}</Link>
          </li>
        ))}
         */}
        <li style={{ display: 'inline', borderRadius: 10, padding: 3, marginRight: 10 }}>
          <button onClick={() => onSelectFilter('all')}>all</button>
        </li>
        <li style={{ display: 'inline', borderRadius: 10, padding: 3, marginRight: 10 }}>
          <button style={{ backgroundColor: filter.yoga ? '#67E0E5' : 'white' }} onClick={() => onSelectFilter('yoga')}>
            yoga
          </button>
        </li>
        <li style={{ display: 'inline', borderRadius: 10, padding: 3, marginRight: 10 }}>
          <button
            style={{ backgroundColor: filter.drama ? '#67E0E5' : 'white' }}
            onClick={() => onSelectFilter('drama')}
          >
            drama
          </button>
        </li>
        <li style={{ display: 'inline', borderRadius: 10, padding: 3, marginRight: 10 }}>
          <button style={{ backgroundColor: filter.arte ? '#67E0E5' : 'white' }} onClick={() => onSelectFilter('arte')}>
            arte
          </button>
        </li>
      </ul>
      <hr />
      <div style={{ display: 'flex' }}>
        {courses
          .filter((item) => !movido || filter[item.genre])
          .map((item) => (
            <Link to={`/courses/${item.index}`} key={item.index} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  height: 100,
                  width: 100,
                  padding: 15,
                  border: '1px solid grey',
                  margin: 10,
                  borderRadius: 10
                }}
              >
                {item.name}
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default CoursesList;
