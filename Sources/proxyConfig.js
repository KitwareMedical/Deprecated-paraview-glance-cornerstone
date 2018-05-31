import ConfigUtils from 'paraview-glance/Sources/config/configUtils';

import Generic from 'paraview-glance/Sources/config/Generic';

import proxyDefs from './proxyDefs';

const { deepCopyPath, objAssignPath } = ConfigUtils;

function copyAssign(config, path, value) {
  const newConfig = deepCopyPath(config, path);
  objAssignPath(newConfig, path, value);
  return newConfig;
}

let config = Generic.Proxy;

// use cornerstone views
config = copyAssign(config, 'definitions.Views', proxyDefs.Views);

// Use cornerstone representations
['SliceX', 'SliceY', 'SliceZ'].forEach((slice) => {
  config = copyAssign(
    config,
    `definitions.Representations.${slice}`,
    proxyDefs.Slices[slice]
  );
});

const CornerstoneConfig = config;
export default CornerstoneConfig;
