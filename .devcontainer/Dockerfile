FROM lupai-front-core

RUN --mount=type=cache,target=/var/cache/apt \
    --mount=target=/var/cache/apt,type=cache,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
    git \
    vim \
    htop \
    zsh \
    sudo \
    curl \
    openssh-client \
    ca-certificates \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/tmp/* /var/lib/apt/lists/*

COPY  ./ .
RUN npm install

ARG DEVCONTAINER_USER
RUN usermod -aG sudo $DEVCONTAINER_USER \
    && passwd -d $DEVCONTAINER_USER

ENV SHELL=/usr/bin/zsh
RUN chsh $DEVCONTAINER_USER -s $SHELL

USER $DEVCONTAINER_USER
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
