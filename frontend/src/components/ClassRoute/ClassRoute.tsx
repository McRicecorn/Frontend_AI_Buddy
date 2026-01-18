import React from 'react'
import { Navigate } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import StudentList from '../../Pages/StudentList'
import { SchoolClass } from '../../classes/SchoolClass'

interface ClassRouteProps {
  schoolClasses: SchoolClass[] | null;
}

const ClassRoute: React.FC<ClassRouteProps> = ({ schoolClasses }) => {
  const { schoolClass } = useParams<{ schoolClass: string }>();

  if (!schoolClass || schoolClasses === null || !schoolClasses.some(s => s.name.toLowerCase() === schoolClass.toLowerCase())) return <Navigate to="/404" replace />;

  return <StudentList className={schoolClass} />;
}

export default ClassRoute