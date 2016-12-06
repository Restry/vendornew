#!/usr/bin/env node
if (process.env.NODE_ENV !== 'production' && !process.env.NODE_DEBUG) {
  if (!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json$)/i
  })) {
    return;
  }
}
require('../server.babel'); // babel registration (runtime transpilation for node)
require('../api/api');
