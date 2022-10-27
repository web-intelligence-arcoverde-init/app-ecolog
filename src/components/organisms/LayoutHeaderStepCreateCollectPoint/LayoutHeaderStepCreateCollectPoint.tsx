import React from 'react';

import {Typography, Separator} from '../..';

export const LayoutHeaderStepCreateCollectPoint = ({
  title,
  description,
}: any) => {
  return (
    <>
      <Typography color="black-200">{title}</Typography>

      <Separator height={4} />

      <Typography color="black-200" variant="legend">
        {description}
      </Typography>
    </>
  );
};
