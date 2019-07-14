import React from 'react';

export default function Avatar({ name, url }) {
  return <img alt={`${name}'s Avatar`} className="avatar" src={url} />;
}
