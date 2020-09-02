load("@npm//prettier:index.bzl", _prettier_test = "prettier_test", "prettier")

def prettier_test(name, srcs):
    config = ["--config", "$(location //:.prettierrc.js)"]
    sources = ["$(location :{})".format(src) for src in srcs]
    data = srcs + ["//:.prettierrc.js"]

    _prettier_test(
        name = name,
        args = config + ["--check"] + sources,
        data = data,
        testonly = True,
    )

    # Not sure if this is useful
    prettier(
        name = name + "-fix",
        args = config + ["--write"] + sources,
        data = data,
    )