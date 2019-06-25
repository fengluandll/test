package org.cdibook.chapter4.scope;

import org.jetbrains.annotations.NotNull;

import javax.enterprise.event.Observes;
import javax.enterprise.inject.spi.AfterBeanDiscovery;
import javax.enterprise.inject.spi.BeanManager;
import javax.enterprise.inject.spi.Extension;

public class MyExtension implements Extension {

    void afterBeanDiscovery(@NotNull @Observes AfterBeanDiscovery event,
                            BeanManager manager) {
        event.addContext(new MyNonPassivatingScopeContextImpl());
    }
}
