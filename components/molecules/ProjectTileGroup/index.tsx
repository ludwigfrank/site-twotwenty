import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import faker from 'faker'
import { ProjectTile } from '../ProjectTile'

interface ProjectTileGroupProps {}

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  600: 1
}

const projects = [
  {
    name: 'Latter — A Chat Application that Values Your Time',
    authors: ['— Ludwig Frank']
  },
  {
    name: 'Die Sache mit dem Gefühl',
    authors: ['— Hsuan Lee']
  },
  {
    name: 'lock&light — Dein Helfer für digital Detox',
    authors: ['— Annika Rauch']
  },
  {
    name: 'PABLO — Personal Assistant Biologic Operator',
    authors: ['— Daniel Boubet']
  },
  {
    name: 'Life Cycle — Virtual life profits from virtual death?',
    authors: ['— Theodor Hillmann']
  },
  {
    name:
      'Why so serious? Anpassen von Gesellschaftsspielen zu Kreativmethoden',
    authors: ['— Sophia Grote', '— Florian Schröder']
  },
  {
    name: 'Zeugwerk',
    authors: ['— Nina Blume', '— Alma de Andrade Sanderink']
  },
  {
    name: 'pure — your second skin',
    authors: ['— Julian Brooks']
  },
  {
    name:
      'Why so serious? Anpassen von Gesellschaftsspielen zu Kreativmethoden',
    authors: ['— Sophia Grote', '— Florian Schröder']
  }
]

export const ProjectTileGroup: FunctionComponent<ProjectTileGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {projects.map(({ name, authors }) => (
        <ProjectTile title={name} authors={authors} />
      ))}
    </Masonry>
  )
}
